import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-image-header',
  templateUrl: './expandable-image-header.page.html',
  styleUrls: [
    './expandable-image-header.page.scss',
    '../../components/ion4-expandable-image-header/ion4-expandable-image-header.component.scss'
  ],
})
export class ExpandableImageHeaderPage implements OnInit {

  public title = 'Expandable image title';

  tabs: Array<any> = [{
    name: 'conversations 1'
  }, {
    name: 'conversations 2'
  }, {
    name: 'conversations 3'
  }, {
    name: 'conversations 4'
  }, {
    name: 'conversations 5'
  }, {
    name: 'conversations 6'
  }];

  conversations = [
    {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Jessie',
      title: 'Pay attention',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Bullseye',
      title: 'Got ya',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Buzz',
      title: 'I can fly',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Hamm',
      title: 'Pork tastes good',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Potatohead',
      title: 'Chop chop',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Rex',
      title: 'Tiny hands',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Jessie',
      title: 'Weeeeee',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Slinky',
      title: 'Pay attention',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Squeeze',
      title: 'Me',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Woody',
      title: 'Like my head?',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Jessie',
      title: 'Pay attention',
      description: 'This is just some placeholder text',
    }, {
      image: 'https://i.pinimg.com/originals/36/ec/9c/36ec9c5eff9b4c841aa08bfc8952c537.jpg',
      name: 'Jessie',
      title: 'Pay attention',
      description: 'Help ons bepalen hoe jij over risico denkt, zodat wij een gepaste nieuwe regeling kunnen adviseren',
    }

  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSlide(e) {
    console.log(e);
  }

}
