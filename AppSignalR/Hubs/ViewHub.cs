using Microsoft.AspNetCore.SignalR;

public class ViewHub : Hub{
    public static int ViewCount {get;set;} = 0;

    public async Task NotifyWatching(){
        ViewCount++;

        // notify EVERYONE about new view count
        await Clients.All.SendAsync("viewCountUpdate", ViewCount);
    }

    public Task IncrementServerView(){
        ViewCount++;

        return Clients.All.SendAsync("incrementView", ViewCount);
    }
}