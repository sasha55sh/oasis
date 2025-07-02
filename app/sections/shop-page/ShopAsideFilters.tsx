"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {motion} from "framer-motion"

import { CardProps } from "@/config/types";
import FiltersSkeleton from "./FilterSceleton";
import { useAlert } from "@/hooks/alertContext";
import Button from "@/components/ButtonComponent";
