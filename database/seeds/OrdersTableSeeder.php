<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Order;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = Faker::create();
        foreach (range(1, 30) as $index){

            Order::create([
                'type' => $faker->name(3),
                'body' => $faker->sentence(2)
            ]);
        }
    }
}
