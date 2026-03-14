import { NextRequest, NextResponse } from "next/server";
import { prisma_db } from "@/lib/prisma";

// POST /api/taskers - Register as a helper
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const tasker = await prisma_db.tasker.create({
      data: {
        name: body.name,
        mobile: body.mobile,
        location: body.location,
        residence: body.residence,
        college: body.college,
        course: body.course,
        yearOfStudy: body.yearOfStudy,
        skills: body.skills,
      },
    });

    return NextResponse.json(tasker, { status: 201 });
  } catch (error) {
    console.error("Error registering tasker:", error);
    return NextResponse.json(
      { error: "Failed to register" },
      { status: 500 }
    );
  }
}
