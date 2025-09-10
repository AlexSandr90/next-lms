import {UserRole} from "@/drizzle/schema/user";
import {eq} from "drizzle-orm";
import {ProductTable} from "@/drizzle/schema/product";


export function canCreateProducts({role}: { role: UserRole | undefined }) {
  return role === 'admin'
}

export function canUpdateProducts({role}: { role: UserRole | undefined }) {
  return role === 'admin'
}

export function canDeleteProducts({role}: { role: UserRole | undefined }) {
  return role === 'admin'
}

export const wherePublicProducts = eq(ProductTable.status, 'public')