import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.scss']
})
export class MyTweetsComponent implements OnInit {
  tweet: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllTweets().subscribe(response => {
      this.tweet = response;
      console.log(response);
    });
  }

  delete(index: any) {
    this.userService.deletTweet(index).subscribe(response => {
    }, (error) => {
      this.ngOnInit();
    }
    );
  }

}

