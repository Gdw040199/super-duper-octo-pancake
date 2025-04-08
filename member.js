function skillsMembers() {
  return {
    name: "members",
    description: "Get members of a guild",
    options: [
      {
        name: "guild",
        description: "The guild to get members from",
        type: 6,
        required: true,
      },
    ],
  };
}