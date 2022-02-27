import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormArray} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode=false;
  recipeForm:FormGroup;


  constructor(private route:ActivatedRoute,
    private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
       this.id=+params['id'];
       this.editMode= params['id']!=null;
       this.inItForm();
    });
  }
  onSubmit(){
    console.log(this.recipeForm);
  }

  private inItForm(){
    let recipeName='';
    let recipeImagepath='';
    let recipeDescription='';
    let recipeIngredients=new FormArray([]);
    if(this.editMode){
      const recipe=this.recipeService.getRecipe(this.id);
      recipeName= recipe.name;
      recipeImagepath=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe['ingredients']){
        
      }

    }
    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName),
      'imagePath':new FormControl(recipeImagepath),
      'description':new FormControl(recipeDescription)
    });
  } 
}
