<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class Suggestions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $suggestions = [
            ["suggestion" => "how to bake bagels"],
            ["suggestion" => "how to import in python"],
            ["suggestion" => "typescript docs"],
            ["suggestion" => "can i has cheezburger"],
            ["suggestion" => "how tall is the mount everest"],
            ["suggestion" => "cat memes"],
            ["suggestion" => "dog memes"],
            ["suggestion" => "whe did the french revolution happen"],
            ["suggestion" => "lorem ipsum dolor sit amet"],
            ["suggestion" => "white noise generator"],
            ["suggestion" => "who invented the telephone"],
            ["suggestion" => "latest movies"],
            ["suggestion" => "download the entire internet"],
            ["suggestion" => "first human in space"],
            ["suggestion" => "2 + 2 equals"],
            ["suggestion" => "1 brl in usd"],
            ["suggestion" => "what if the earth was a literal doughnut"],
            ["suggestion" => "how old is the universe"],
            ["suggestion" => "laravel docs"],
            ["suggestion" => "beyonce latest album"],
            ["suggestion" => "magnets how do they work"],
            ["suggestion" => "tamagotchi prices"],
            ["suggestion" => "how many bits are in a byte"],
            ["suggestion" => "hot bowls of soup near me"],
            ["suggestion" => "taco recipes"]
        ];

        DB::table('suggestions')->insert($suggestions);
    }
}
