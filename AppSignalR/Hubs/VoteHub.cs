using Microsoft.AspNetCore.SignalR;

public class VoteHub : Hub
{
    private readonly IVoteManager voteManager;
    private readonly ILogger<VoteHub> logger;

    public VoteHub(IVoteManager voteManager, ILogger<VoteHub> logger)
    {
        this.voteManager = voteManager;
        this.logger = logger;

        logger.LogInformation($"VoteHub created: {DateTime.Now}");
    }

    public Dictionary<string, int> GetCurrentVotes()
    {
        return voteManager.GetCurrentVotes();
    }
}