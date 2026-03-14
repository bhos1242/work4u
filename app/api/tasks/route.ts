import { NextRequest, NextResponse } from "next/server";
import { prisma_db } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// GET /api/tasks - Browse tasks with filters
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");
    const areasParam = searchParams.get("areas");
    const categoriesParam = searchParams.get("categories");
    const status = searchParams.get("status");

    const where: Record<string, unknown> = {};

    if (areasParam) {
      where.location = { in: areasParam.split(",") };
    }
    if (categoriesParam) {
      where.category = { in: categoriesParam.split(",") };
    }
    if (status) {
      where.status = status;
    } else {
      where.status = "OPEN";
    }

    const [tasks, total] = await Promise.all([
      prisma_db.task.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          category: true,
          description: true,
          location: true,
          budget: true,
          budgetType: true,
          status: true,
          startDate: true,
          createdAt: true,
        },
      }),
      prisma_db.task.count({ where }),
    ]);

    return NextResponse.json({
      tasks,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}

// POST /api/tasks - Create a new task
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const task = await prisma_db.task.create({
      data: {
        category: body.category,
        description: body.description,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
        hoursPerDay: body.hoursPerDay,
        location: body.location,
        address: body.address || null,
        budget: body.budget,
        budgetType: body.budgetType,
        mobileNumber: body.mobileNumber,
        userEmail: session.user.email,
        userName: session.user.name || body.userName || "Anonymous",
        gender: body.gender || null,
        numberOfPeople: body.numberOfPeople || 1,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    );
  }
}
