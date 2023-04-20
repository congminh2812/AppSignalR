using AppSignalR.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AppSignalR.Controllers
{
    public class VoteController : Controller
    {
        private readonly IVoteManager voteManager;
        public VoteController(IVoteManager voteManager)
        {
            this.voteManager = voteManager;
        }

        [HttpPost]
        public async Task<IActionResult> VotePie()
        {
            await voteManager.CastVote("pie");
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> VoteBacon()
        {
            await voteManager.CastVote("bacon");
            return Ok();
        }
    }
}