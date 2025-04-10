<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FilieresSeeder extends Seeder
{
    public function run()
    {
        $filieres = [
            // Cycle Technicien Supérieur
            ['cycle' => 'Cycle Technicien Supérieur', 'ancien_nom' => 'Génie Civil option Bâtiment et Urbanisme', 'nouveau_nom' => 'Bâtiment et Urbanisme'],
            ['cycle' => 'Cycle Technicien Supérieur', 'ancien_nom' => 'Routes et Transports', 'nouveau_nom' => 'Routes et Transports'],
            ['cycle' => 'Cycle Technicien Supérieur', 'ancien_nom' => 'Hydraulique et Environnement', 'nouveau_nom' => 'Hydraulique et Environnement'],
            ['cycle' => 'Cycle Technicien Supérieur', 'ancien_nom' => 'Géomètre', 'nouveau_nom' => 'Géomètre'],

            // Cycle Ingénieur
            ['cycle' => 'Cycle Ingénieur', 'ancien_nom' => 'Génie Civil option Bâtiment et Urbanisme', 'nouveau_nom' => 'Travaux publics option Bâtiment et Urbanisme'],
            ['cycle' => 'Cycle Ingénieur', 'ancien_nom' => 'Génie Civil option Hydraulique et Environnement', 'nouveau_nom' => 'Travaux publics option Hydraulique et Environnement'],
            ['cycle' => 'Cycle Ingénieur', 'ancien_nom' => 'Génie Civil option Infrastructures et Transports', 'nouveau_nom' => 'Travaux publics option Infrastructures et Transports'],
            ['cycle' => 'Cycle Ingénieur', 'ancien_nom' => 'Géomètre-Topographe', 'nouveau_nom' => 'Géomètre-Topographe'],
        ];

        foreach ($filieres as $filiere) {
            DB::table('filieres')
                ->where('cycle', $filiere['cycle'])
                ->where('nom_filiere', $filiere['ancien_nom'])
                ->update(['nom_filiere' => $filiere['nouveau_nom']]);
        }
    }
}


