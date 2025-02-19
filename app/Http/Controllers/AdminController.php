<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
use App\Models\Presentation;
use App\Models\Evenement;
use App\Models\Filiere;
use App\Models\Ecole;
use App\Models\Information;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;



class AdminController extends Controller
{
   // Afficher tous les sliders
   public function sliders()
   {
       $slider = Slider::all(); // Récupérer tous les sliders
    //    dd($slider);  
       return Inertia::render('Slider/SliderPage', [
           'slider' => $slider,
        //    'csrf_token' => csrf_token(), 
       ]);
   }

   public function store(Request $request)
{
    $request->validate([
        'titre' => 'required|string|max:255',
        'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
    ]);

    $slider = new Slider();
    $slider->titre = $request->titre;

    if ($request->hasFile('image')) {
        $slider->image = $request->file('image')->store('sliders', 'public');
    }

    $slider->save();

    return back()->with('success', 'Slider ajouté avec succès !');


}


   // Afficher un slider par ID
   public function show($id)
   {
       $slider = Slider::find($id);
       
       if (!$slider) {
           // Retourner un message d'erreur via Inertia si le slider n'est pas trouvé
           return Inertia::render('SliderPage', [
               'message' => 'Slider non trouvé',
           ]);
       }

       // Retourner le slider trouvé avec Inertia
       return Inertia::render('SliderPage', [
           'slider' => $slider,
       ]);
   }

   // Mettre à jour un slider
   public function update(Request $request, $id)
   {
       // Récupérer le slider par ID
       $slider = Slider::find($id);
       
       if (!$slider) {
           return Inertia::render('SliderPage', [
               'message' => 'Slider non trouvé',
           ]);
       }

       // Validation des données de mise à jour
       $validated = $request->validate([
           'titre' => 'string|max:255',
           'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
       ]);

       // Mise à jour du slider
       $slider->update($validated);

       // Retourner une réponse Inertia après la mise à jour
       return Inertia::render('SliderPage', [
           'sliders' => Slider::all(),
           'message' => 'Slider mis à jour avec succès',
       ]);
   }

   // Supprimer un slider
   public function destroy($id)
   {
       $slider = Slider::find($id);

       if (!$slider) {
           return Inertia::render('SliderPage', [
               'message' => 'Slider non trouvé',
               'sliders' => Slider::all(),
           ]);
       }

       $slider->delete(); // Supprimer le slider

       // Retourner une réponse Inertia après la suppression
       return redirect()->route('sliderPage')->with('success', 'Slider supprimé avec succès');
   }
   

   
     // Affichage des événements
     public function evenement()
     {
        $evenements = Evenement::latest()->get();
            // dd($events); 
         return Inertia::render('Event/EventPage', [
             'evenements' => $evenements, // Envoyer les événements à Inertia
         ]);
       
     }
     public function dashboard()
     {
        $evenements = Evenement::select('id', 'titre', 'date', 'lieu')
                                ->orderBy('date', 'desc')
                                ->get();
        if (Auth::check()) {                        
        $userName = Auth::user()->name; // Récupérer l'utilisateur connecté
        // dd($userName);  
        } else {
            $userName = 'Invité';
        return redirect()->route('login');
    }
            // dd($userName); 
         return Inertia::render('Dashboard', [
             'evenements' => $evenements, // Envoyer les événements à Inertia
             'userName' => $userName // Passer l'utilisateur à la vue

         ]);
         
       
     }
        public function welcome()
    {
        // Récupérer les événements pour la page d'accueil
        $evenements = Evenement::all();
          // Récupérer les sliders
        $sliders = Slider::all(); // Assure-toi que tu as bien un modèle Slider configuré
        $filieres = Filiere::all();
        // Retourner la vue d'accueil (Welcome) avec les événements
        return Inertia::render('Welcome', [
            'evenements' => $evenements,
            'sliders' => $sliders,
            'filieres' => $filieres,
            
        ]);
    }
    
     // Ajout d'un événement
     public function storeEvenement(Request $request)
     {
         $request->validate([
             'titre' => 'required|string|max:255',
             'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
             'date' => 'required|date',
             'lieu' => 'required|string|max:255',
             'description' => 'required|string',
         ]);
 
         $evenement = new Evenement();
         $evenement->titre = $request->titre;
         $evenement->date = $request->date;
         $evenement->lieu = $request->lieu;
         $evenement->description = $request->description;
 
         if ($request->hasFile('image')) {
            $evenement->image = $request->file('image')->store('evenements', 'public');
         }
 
         $evenement->save();
 
         return back()->with('success', 'Événement ajouté avec succès !');
     }
 
     // Suppression d'un événement
    public function deleteEvenement($id)
{
    $evenement = Evenement::findOrFail($id);
    $evenement->delete();
    
    // Réponse Inertia avec les événements mis à jour
    return Inertia::render('EventPage', [
        'evenements' => Evenement::all(),
        'message' => 'Événement supprimé avec succès !'
    ]);
}
     public function presentation()
{
    // Récupérer les informations à afficher sur la page de présentation
    $informations = Information::all();

    // Retourner la vue Presentation avec les informations
    return Inertia::render('Presentation', [
        'informations' => $informations,
    ]);
}
    // Ajoutez des méthodes similaires pour Filiere, Ecole, et Information...


    public function createInformation()
    {
        return Inertia::render('InformationForm'); // Ou ton nom de composant/vue
    }
    public function storeInformation(Request $request)
    {
        // Valider les données
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120', // Accepte un fichier image
            'nom_image' => 'required|string|max:255',
            'description' => 'required|string',
        ]);
    
        // Création de l'instance de Information
        $information = new Information();
        $information->titre = $validated['titre'];
        $information->nom_image = $validated['nom_image'];
        $information->description = $validated['description'];
    
        // Vérifier si une image a été uploadée et la stocker
        if ($request->hasFile('image')) {
            $information->image = $request->file('image')->store('informations', 'public');
        }
    
        // Sauvegarde dans la base de données
        $information->save();
    
        // Retourner la page avec un message de succès
        return redirect()->route('presentation')->with('success', 'Information ajoutée avec succès');
    }
    

public function showImage($id)
{
    $information = Information::find($id);
    
    if (!$information) {
        // Retourner un message d'erreur via Inertia si l'information n'est pas trouvée
        return Inertia::render('Presentation', [
            'message' => 'Information non trouvée',
        ]);
    }

    // Retourner l'image trouvée avec Inertia
    return Inertia::render('Presentation', [
        'image' => $information->image,
    ]);
}
public function createFiliere()
{
    // $filieres = Filiere::all();
    // Récupérer uniquement les filières où débouchés n'est pas "Non spécifié" ou vide
    $filieres = Filiere::whereNotNull('debouchés')
                       ->where('debouchés', '!=', 'Non spécifié')
                       ->where('debouchés', '!=', '')
                       ->get();

    $filieresIngénieur = DB::table('filieres')
                       ->where('cycle', 'Cycle Ingénieur')
                       ->get();
    $filieresTechnicien = DB::table('filieres')
                       ->where('cycle', 'Cycle Technicien Superieur')
                       ->get();
    return inertia('Ecole', [
        'filieres' => $filieres,
        'filieresIngénieur' => $filieresIngénieur,
        'filieresTechnicien' => $filieresTechnicien

    ]);
}
public function index()
{
    $filieres = Filiere::all();

    return inertia('FiliereForm', [
        'filieres' => $filieres

    ]);
}
public function index2()
{
    $filieres = Filiere::all(); // Récupérer toutes les filières
    return Inertia::render('Welcome', ['filieres' => $filieres]);
}



// public function storeFiliere(Request $request)
//     {
//         $request->validate([
//             'cycle' => 'required|string|max:255',
//             'nom_filiere' => 'required|string|max:255',
//             'debouchés' => 'required|string',
//         ]);

//         Filiere::create($request->all());

//         return redirect()->route('ecoles')->with('success', 'Filière ajoutée avec succès');
//     }

public function storeFiliere(Request $request)
{
    // Validation des données
    $request->validate([
        'cycle' => 'required|string',
        'nom_filiere' => 'required|string',
        'debouchés' => 'required|string',
    ]);

    // Trouver la filière existante
    $filiere = Filiere::where('cycle', $request->cycle)
                      ->where('nom_filiere', $request->nom_filiere)
                      ->first();

    if ($filiere) {
        // Mise à jour des débouchés
        $filiere->debouchés = $request->debouchés;
        $filiere->save();

        return redirect()->route('ecoles')->with('success', 'Filière mise à jour avec succès');
    } else {
        // Créer une nouvelle filière si elle n'existe pas encore
        Filiere::create([
            'cycle' => $request->cycle,
            'nom_filiere' => $request->nom_filiere,
            'debouchés' => $request->debouchés,
        ]);

        return redirect()->route('ecoles')->with('success', 'Filière ajoutée avec succès');
    }
}

    
public function ecoles()
    
{
    $filieres = Filiere::all();

    return Inertia::render('Ecoles', [
       
        'filieres' => $filieres,
        
    ]);
}   



    
}
