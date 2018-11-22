import { Component, Input, Renderer2, OnInit, ContentChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ion4-expandable-image-header',
  templateUrl: './ion4-expandable-image-header.component.html',
  styleUrls: ['./ion4-expandable-image-header.component.scss']
})
export class Ion4ExpandableImageHeaderComponent implements AfterViewInit {


  // How much opacity should be applied to the upper-parallax.
  // 0 = no opacity animation
  // 1 = 1 to 0 opacity
  // 2 = 1 to 0.5 opacity
  // 3 = 1. to 0.333 opacity
  // etc
  @Input() opacityFactor = 1;
  @Input() scrollArea: any;

  @ContentChild('ionHeader', { read: ElementRef }) ionHeader: any;
  @ContentChild('ionContent', { read: ElementRef }) ionContent: any;

  // The normal ionic-header at the top of the page. Starts not-visible (opacity 0)
  private _ionToolbar: any;
  private _ionHeaderTitle: any;
  // This is element that contains the fading background-image
  private _fixedContent: any;
  // Height of the ionic header at the top.
  private _ionHeaderHeight = 56; // TODO: maybe better to calculate this in case ionic changes the height in the future
  // How far down does the scroll-content start. Used to start animation and the changing of the opacity of the background image
  private _scrollPaddingTop: number;

  constructor(public renderer: Renderer2) {

  }

  ngAfterViewInit() {

    // TODO: check if all necessary elements are present, otherwise throw error
    const theIonContentElementRef = this.ionContent;
    const theScrollContent = theIonContentElementRef.nativeElement.querySelector('.scroll-content');
    this._fixedContent = theIonContentElementRef.nativeElement.querySelector('.fixed-content');
    // Set padding top auto
    const getHeightString = window.getComputedStyle(this._fixedContent)['height'];
    const heightFixed = Number(getHeightString.substring(0, getHeightString.length - 2));
    this.renderer.setStyle(theScrollContent, 'paddingTop', (heightFixed - 56) + 'px');
    const thePaddingTopString = window.getComputedStyle(theScrollContent)['padding-top'];
    this._scrollPaddingTop = Number(thePaddingTopString.substring(0, thePaddingTopString.length - 2));
    this._ionToolbar = this.ionHeader.nativeElement.querySelector('ion-toolbar');
    this._ionHeaderTitle = this.ionHeader.nativeElement.querySelector('ion-title');
    this.renderer.removeClass(this.ionHeader.nativeElement, 'header-md');
    this.renderer.removeClass(this.ionHeader.nativeElement, 'header-ios');
    // Subscribe to the scroll-event
    this.scrollArea.ionScroll.subscribe((event) => {
      this._setOpacityFactor(event.detail.scrollTop);
      this._setTransitionClasses(event.detail.scrollTop);
    });
  }

  /**
   * Set the opacity of the background-image based on the scroll-position
   * @param {number} scrollTop
   * @private
   */
  private _setOpacityFactor(scrollTop: number) {
    if (this.opacityFactor > 0) {
      let theNewHeaderHeight = this._scrollPaddingTop - (scrollTop / this.opacityFactor);
      if (theNewHeaderHeight < 0) {
        theNewHeaderHeight = 0;
      }
      const theNewOpacity = theNewHeaderHeight / this._scrollPaddingTop;
      this.renderer.setStyle(this._fixedContent, 'opacity', theNewOpacity.toString());
    }
  }

  /**
   * Add or remove the css-classes that trigger the transitions
   * @param {number} scrollTop
   * @private
   */
  private _setTransitionClasses(scrollTop: number) {

    // 2 steps in the animation-process of the header:
    // 1. Make the header visible when top of parallax-bottom touches it
    if (scrollTop + this._ionHeaderHeight > this._scrollPaddingTop) {
      // this.renderer.addClass(this.ionHeader.nativeElement, 'visible');
    } else if (scrollTop + this._ionHeaderHeight < this._scrollPaddingTop) {
      // this.renderer.removeClass(this.ionHeader.nativeElement, 'visible');
    }
    // 2. Show the the title in the header when the Parallax-bottom is no longer visible
    if (scrollTop > this._scrollPaddingTop) {
      this.renderer.addClass(this._ionHeaderTitle, 'animate');
      this.renderer.addClass(this.ionHeader.nativeElement, 'header-md');
      this.renderer.addClass(this.ionHeader.nativeElement, 'header-ios');
      this.renderer.removeClass(this._ionToolbar, 'transparent');
    } else if (scrollTop < this._scrollPaddingTop) {
      this.renderer.removeClass(this._ionHeaderTitle, 'animate');
      this.renderer.removeClass(this.ionHeader.nativeElement, 'header-md');
      this.renderer.removeClass(this.ionHeader.nativeElement, 'header-ios');
      this.renderer.addClass(this._ionToolbar, 'transparent');
    }

  }


}
