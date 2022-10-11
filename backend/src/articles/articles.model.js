const { model, Schema } = require("mongoose");

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    excerpt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

const Article = model("post", articleSchema);

module.exports = Article;
