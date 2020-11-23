// j'initialise les valeurs de départ
var prix = 0;
var choisir = null;
var compteur = 0;

$('document').ready(function(){
        // choisir un nombre entier (math floor) gagnant aléatoirement sans dépasser 100 (random)
        prix = Math.floor(Math.random() * 100);

        $('#valid').click(function(event){
            // la valeur de l'input est égal à la variable choisir
            choisir = $('#nombre').val();
            // Afficher que le joueur a gagné et le nombre d'essaie 
            if (choisir == prix) {
                $('.reponse').html('Gagné ! Nombre de coup = ' + compteur);
            }
            // Afficher que le nombre gagnant est plus grand
            else if (choisir < prix) {
                $('.reponse').html('Plus grand');
            }
            // Afficher que le nombre gagnant est plus petit
            else{ 
                $('.reponse').html('plus petit');
            }
            // Pour réinitialiser la valeur de mon input
            $('#nombre').val('');
            // empecher de raffraichir la page 
            event.preventDefault();
// Ajouter +1 à mon compteur 
        compteur++ ;    
        });
});


// voir https://www.youtube.com/watch?v=-O1mQIOPXvs
// et https://www.youtube.com/watch?v=gSwPup_de0c
