const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          { commentId: 111, commentContent: "Haai juga hai jugaa" },
          { commentId: 112, commentContent: "Haai juga hai jugaa" },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [{ commentId: 121, commentContent: "Haai juga hai jugaa" }],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

// Buatlah fungsi untuk menghitung total komentar yang ada
function commentsCount(comments) {
  let count = 0;
  comments.forEach((comment) => {
    count++;
    if (comment.replies) {
      count += commentsCount(comment.replies);
    }
  });
  return count;
}

console.log("Total komentar: ", commentsCount(comments));
