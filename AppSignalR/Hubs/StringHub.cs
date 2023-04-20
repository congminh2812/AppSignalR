using Microsoft.AspNetCore.SignalR;

public class StringHub : Hub{
    public async Task<string> GetFullName(string firstName, string lastName){
        return $"{firstName} {lastName}";
    }
}