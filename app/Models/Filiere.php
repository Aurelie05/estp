<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filiere extends Model
{
    use HasFactory;

    protected $table = 'filieres';

    protected $fillable = [
        'cycle',
        'nom_filiere',
        'debouchés',
    ];
    public function cycle()
    {
        return $this->belongsTo(Cycle::class); // Définition de la relation
    }
}
