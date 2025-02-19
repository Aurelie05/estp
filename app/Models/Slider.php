<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;

    // Spécifiez le nom de la table
    protected $table = 'slider';

    // Champs autorisés pour l'insertion et la mise à jour
    protected $fillable = ['titre', 'image'];
}
