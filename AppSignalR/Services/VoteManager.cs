using Microsoft.AspNetCore.SignalR;

public interface IVoteManager
{
    Task CastVote(string voteFor);
    Dictionary<string, int> GetCurrentVotes();
}

public class VoteManager : IVoteManager
{
    private Dictionary<string, int> votes;
    private IHubContext<VoteHub> hubContext;
    public VoteManager(IHubContext<VoteHub> hubContext)
    {
        votes = new Dictionary<string, int>();
        votes.Add("pie", 8);
        votes.Add("bacon", 7);

        this.hubContext = hubContext;
    }

    public async Task CastVote(string voteFor)
    {
        votes[voteFor]++;

        //notify
        await hubContext.Clients.All.SendAsync("updateVotes", votes);
    }

    public Dictionary<string, int> GetCurrentVotes()
    {
        return votes;
    }
}