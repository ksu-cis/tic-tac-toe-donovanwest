﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using TicTacToe;
namespace TicTacToe.Pages
{
    public class CheckersModel : PageModel
    {
        public Game Game;

        public void OnGet()
        {
            Game = new Game();
        }
        public void OnPost(string state, int checkerX, int checkerY, int squareX, int squareY)
        {
            //var form = Request.Form;
            Game = new Game();
            Checker checker = Game.Board[checkerX, checkerY];
            Game.Board[squareX, squareY] = checker;
            Game.Board[checkerX, checkerY] = null;
        }
    }
}