import { Component } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from "@angular/cdk/layout";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isMobile: boolean;
  title = "thenovaeffect";

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
      ])
      .subscribe((state: BreakpointState) => {
        let hp = state.breakpoints[Breakpoints.HandsetPortrait];
        let hl = state.breakpoints[Breakpoints.HandsetLandscape];
        if (hp || hl) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });
  }
}
