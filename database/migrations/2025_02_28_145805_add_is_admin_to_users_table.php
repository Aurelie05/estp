<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsAdminToUsersTable extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // Ajouter la colonne 'is_admin' après la colonne 'email'
            $table->boolean('is_admin')->default(false)->after('email');
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // Supprimer la colonne 'is_admin' en cas de rollback
            $table->dropColumn('is_admin');
        });
    }
}
