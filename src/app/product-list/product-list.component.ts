import { Component, ViewChild } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products=products;
  continuousClick = false;

  @ViewChild('svgTarget', {static:true}) 
  svgTarget: SVGSVGElement;
  @ViewChild('svgTarget', {static:true})
  svgHTMLTarget: HTMLElement;

  share() {
    window.alert('Slider Event Placeholder');
  }

  svgUnClick(evt:MouseEvent): any {
      this.continuousClick = false;
  }
  svgDoClick(evt:MouseEvent): any {
      this.continuousClick = true;
      this.svgClick(evt);
  }
  
  svgClick(evt:MouseEvent): any {
              // this stops the selection stuff
              try {evt.preventDefault(); } catch(e) {};
              if(!this.continuousClick) return;
              
              //console.log(JSON.stringify(evt, null, 4));

              var e = evt.target as HTMLElement;
              var dim = e.getBoundingClientRect();
              var realx = evt.clientX - dim.left;
              var realy = evt.clientY - dim.top;
              
              var svg = evt.target as SVGSVGElement;
              var txPoint = svg.createSVGPoint();
              txPoint.x = evt.clientX;
              txPoint.y = evt.clientY;
              var txPoint = txPoint.matrixTransform(svg.getScreenCTM().inverse());
              //console.log("x: "+realx+" y:"+realy+" tx:"+txPoint.x+" ty:"+txPoint.y);

              var quad = 0;
              if(txPoint.x < 100 && txPoint.y < 100)        quad=0;
              else if(txPoint.x >100 && txPoint.y <100)     quad=1;
              else if(txPoint.x <100 && txPoint.y >100)     quad=2;
              else if(txPoint.x >100 && txPoint.y >100)     quad=3;
              products[quad].dotx = txPoint.x;
              products[quad].doty = txPoint.y;
              products[quad].txPoint = txPoint;
              products[quad].value = Math.sqrt((txPoint.x-100)**2+(txPoint.y-100)**2);
              // max out at 100
              if(products[quad].value > 100) 
                products[quad].value = 100;
              
              // set all to zero if zero is clicked
              if(products[quad].value <2)
                products.forEach((i)=>{i.value = 0; i.dotx = i.doty = 101});

              //console.log("value set "+products[quad].value);
         }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/