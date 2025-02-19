<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FilieresSeeder extends Seeder
{
    public function run()
    {
        DB::table('filieres')->insert([
            // Cycle Technicien Supérieur
            ['cycle' => 'Cycle Technicien Supérieur', 'nom_filiere' => 'Génie Civil option Bâtiment et Urbanisme'],
            ['cycle' => 'Cycle Technicien Supérieur', 'nom_filiere' => 'Routes et Transports'],
            ['cycle' => 'Cycle Technicien Supérieur', 'nom_filiere' => 'Hydraulique et Environnement'],
            ['cycle' => 'Cycle Technicien Supérieur', 'nom_filiere' => 'Géomètre'],
            //Cycle Ingénieur
            ['cycle' => 'Cycle Ingénieur', 'nom_filiere' => 'Génie Civil option Bâtiment et Urbanisme'],
            ['cycle' => 'Cycle Ingénieur', 'nom_filiere' => 'Génie Civil option Hydraulique et Environnement'],
            ['cycle' => 'Cycle Ingénieur', 'nom_filiere' => 'Génie Civil option Infrastructures et Transports'],
            ['cycle' => 'Cycle Ingénieur', 'nom_filiere' => 'Géomètre-Topographe'],
        ]);
    }
}


