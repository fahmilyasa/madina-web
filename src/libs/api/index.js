"use server"

import db from "@/libs/db/prisma";
import { cache } from "react";

export const getPlaces = cache(async () => {
    return db.places.findMany();
});