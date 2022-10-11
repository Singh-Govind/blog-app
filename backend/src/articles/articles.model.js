const { model, Schema } = require("mongoose");

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    excerpt: {
      type: String,
      default: function () {
        let ex = this.description.substring(
          0,
          Math.min(55, this.description.length)
        );

        return ex;
      },
    },
    author: { type: Schema.Types.ObjectId, ref: "user", required: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

const Article = model("post", articleSchema);

module.exports = Article;
