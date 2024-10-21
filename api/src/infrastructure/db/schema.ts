import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const metas = pgTable('metas', {
  id: text('id').primaryKey(),
  titulo: text('titulo').notNull(),
  frequenciaSemanalDesejada: integer('frequencia_semanal_desejada').notNull(),
  criadoEm: timestamp('criado_em', { withTimezone: true }).notNull().defaultNow()
})

export const metasConcluidas = pgTable('metas_concluidas', {
  id: text('id').primaryKey(),
  metaId: text('meta_id').references(() => metas.id).notNull(),
  criadoEm: timestamp('criado_em', { withTimezone: true }).notNull().defaultNow()
})