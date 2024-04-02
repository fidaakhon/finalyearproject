import { connectToDB } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connectToDB()
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
export async function POST(req: NextRequest) {
    return NextResponse.json({ message: "ok" });
};