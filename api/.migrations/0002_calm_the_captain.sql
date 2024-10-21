ALTER TABLE "goals" RENAME TO "metas";--> statement-breakpoint
ALTER TABLE "goal_completions" RENAME TO "metas_concluidas";--> statement-breakpoint
ALTER TABLE "metas_concluidas" RENAME COLUMN "goal_id" TO "meta_id";--> statement-breakpoint
ALTER TABLE "metas_concluidas" RENAME COLUMN "created_at" TO "criado_em";--> statement-breakpoint
ALTER TABLE "metas" RENAME COLUMN "title" TO "titulo";--> statement-breakpoint
ALTER TABLE "metas" RENAME COLUMN "desired_weekly_frequency" TO "frequencia_semanal_desejada";--> statement-breakpoint
ALTER TABLE "metas" RENAME COLUMN "created_at" TO "criado_em";--> statement-breakpoint
ALTER TABLE "metas_concluidas" DROP CONSTRAINT "goal_completions_goal_id_goals_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "metas_concluidas" ADD CONSTRAINT "metas_concluidas_meta_id_metas_id_fk" FOREIGN KEY ("meta_id") REFERENCES "public"."metas"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
