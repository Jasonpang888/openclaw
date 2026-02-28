memoryCmd
  .command("search")
  .description("Search memory files")
  .argument("[query]", "Search query (positional)")
  // Add --query as an alias to match documented interface and user expectations
  .option("--query <query>", "Search query (alternative to positional argument)")
  .action(async (positionalQuery: string | undefined, opts: { query?: string }) => {
    // Resolve query: prefer --query flag, fall back to positional argument
    const query = opts.query ?? positionalQuery;

    if (!query) {
      console.error("error: missing required argument 'query'\n");
      console.error("Usage:");
      console.error('  openclaw memory search "your query"');
      console.error('  openclaw memory search --query "your query"');
      process.exit(1);
    }

    await runMemorySearch(query);
  });