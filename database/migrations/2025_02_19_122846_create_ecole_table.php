<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Exécute les migrations.
     */
    public function up(): void
    {
        Schema::create('ecole', function (Blueprint $table) {
            $table->id();
            $table->string('cycle');
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Annule les migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ecole');
    }
};
