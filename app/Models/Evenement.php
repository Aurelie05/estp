<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use App\Models\Evenement;

class Evenement extends Model
{
    use HasFactory;

    protected $table = 'evenement';

    protected $fillable = [
        'titre',
        'image',
        'date',
        'lieu',
        'description',
    ];
}
