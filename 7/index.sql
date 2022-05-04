CREATE INDEX "click_index" ON "public"."clicks" (
  "campaign_id",
	"created_at"
);
CREATE INDEX "campaigns_index" ON "public"."campaigns" (
  "account_id"
);