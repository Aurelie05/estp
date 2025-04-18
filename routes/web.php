<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use App\Models\Evenement;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\PresentationController;
// use App\Http\Controllers\EvenementController;
use App\Http\Controllers\FiliereController;
use App\Http\Controllers\EcoleController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/presentation', function () {
    return Inertia::render('Presentation'); 
});
Route::get('/ecole', function () {
    return Inertia::render('Ecoles'); 
});
Route::get('/partenaire', function () {
    return Inertia::render('Partenaire'); 
});
Route::get('/actualités', function () {
    return Inertia::render('Actualités'); 
});
Route::get('/cycletechnicien', function () {
    return Inertia::render('CycleTechnicienSup'); 
});
Route::get('/cycleingenieur', function () {
    return Inertia::render('CycleIngenieur'); 
});


// Routes protégées par authentification
Route::middleware(['auth'])->group(function () {

    Route::get('/sliders', [AdminController::class, 'sliders'])->name('sliders.index'); 
    Route::post('/sliders', [AdminController::class, 'store'])->name('sliders.store');
    Route::delete('/sliders/{id}', [AdminController::class, 'destroy'])->name('sliders.delete');
   
    // Afficher le formulaire pour créer un slider
    Route::get('/sliders/create', function () {
        return Inertia::render('Slider/SliderForm');
    })->name('sliders.create');

 // Afficher la liste des sliders
    // Route::get('/sliders', function (){
    //     return Inertia::render('Slider/SliderPage');
    // }) ->name('sliders.index');
    

});

// Autres routes pour l'admin
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/test-sliders', function () {
    return response()->json(App\Models\Slider::all());
});

Route::get('/events', [AdminController::class, 'evenement'])->name('events.index');
Route::post('/events', [AdminController::class, 'storeEvenement'])->name('events.store');
Route::delete('/events/{id}', [AdminController::class, 'deleteEvenement'])->name('events.delete');

Route::get('/events/create', function () {
    return Inertia::render('Event/EventForm');
})->name('events.create');

Route::get('/test-events', function () {
    return response()->json(App\Models\Evenement::all());
});
require __DIR__.'/auth.php';
Route::get('/', [AdminController::class, 'welcome'])->name('welcome');

Route::get('/dashboard', [AdminController::class, 'Dashboard'])->name('dashevent');
Route::get('/dashboard', [AdminController::class, 'Dashboard'])->name('dashinfo');
Route::get('/dashboard', [AdminController::class, 'Dashboard'])->name('dashfiliere');

Route::get('/presentation', [AdminController::class, 'presentation'])->name('presentation');

Route::get('/information', [AdminController::class, 'createInformation'])->name('information.create');

Route::post('/information', [AdminController::class, 'storeInformation'])->name('information.store');
Route::get('/information/edit/{id}', [AdminController::class, 'edit'])->name('information.edit');
Route::put('/information/update/{id}', [AdminController::class, 'updateInformation'])->name('information.update');
Route::delete('/information/{id}', [AdminController::class, 'deleteInformation'])->name('information.delete');


Route::post('/filieres', [AdminController::class, 'storeFiliere'])->name('filieres.store');

Route::get('/filieres', [AdminController::class, 'createFiliere'])->name('filiere.create');
Route::get('/filieres', [AdminController::class, 'index'])->name('filiere.create');
Route::put('/filieres/{id}/debouche', [AdminController::class, 'updateDebouche'])->name('filieres.updateDebouche');
Route::get('/filieres/{id}/edit-debouche', [AdminController::class, 'editDebouche'])->name('filieres.editDebouche');


Route::get('/', [AdminController::class, 'index2'])->name('filiere.create');

Route::get('/',[AdminController::class, 'welcome'])->name('welcome');
Route::get('/ecole',[AdminController::class, 'ecoles'])->name('ecoles');


// Route pour afficher toutes les actualités dans la page actualite
Route::get('/actualites', [AdminController::class, 'actualite'])->name('actualite.index');

// Route pour afficher la page de création d'actualités
Route::get('/actualites/create', function () {
    return Inertia::render('PageActualités/ActualiteForm');
})->name('actualites.create');

// Route pour ajouter une actualité
Route::post('/actualites', [AdminController::class, 'storeActualite'])->name('actualites.store');

// Route pour supprimer une actualité
Route::delete('/actualites/{id}', [AdminController::class, 'deleteActualite'])->name('actualites.delete');

Route::get('/actualites/page', [AdminController::class, 'actuaffichage'])->name('actualites.affichage');



Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
});

Route::post('/logout', function (Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('/');
})->name('logout');