import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SettingsService } from '@delon/theme';
import { StaticUrls } from 'app/util/staticUrl';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  avatar = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'; // 默认头像

  constructor(
    public settings: SettingsService,
    public msgSrv: NzMessageService,
  ) {
    if (settings.user.imageUrl !== null && settings.user.imageUrl !== '') {
      this.avatar = StaticUrls.avatars + settings.user.imageUrl;
    }
  }
}
