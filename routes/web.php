<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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

// Route::get('/sliders', function (){
//     return Inertia::render('Slider/SliderPage');

// });

// Route::get('/sliders/create', function (){
//     return Inertia::render('Slider/SliderForm');

// });
// Route::post('/sliders', [SliderController::class, 'store']);

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
// Route::get('/admin/sliders', [AdminController::class, 'sliders'])->name('admin.sliders');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/test-sliders', function () {
    return response()->json(App\Models\Slider::all());
});

Route::get('/events', [AdminController::class, 'evenement'])->name('events');
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


Route::get('/presentation', [AdminController::class, 'presentation'])->name('presentation');

Route::get('/information', [AdminController::class, 'createInformation'])->name('information.create');

Route::post('/information', [AdminController::class, 'storeInformation'])->name('information.store');


Route::post('/filieres', [AdminController::class, 'storeFiliere'])->name('filieres.store');


Route::get('/filieres', [AdminController::class, 'createFiliere'])->name('filiere.create');
Route::get('/filieres', [AdminController::class, 'index'])->name('filiere.create');
Route::get('/', [AdminController::class, 'index2'])->name('filiere.create');

Route::get('/',[AdminController::class, 'welcome'])->name('welcome');
Route::get('/ecole',[AdminController::class, 'ecoles'])->name('ecoles');


Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
});