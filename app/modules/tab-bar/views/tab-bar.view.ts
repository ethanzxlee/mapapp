import { View } from 'ui/core/view';
import { isIOS } from 'tns-core-modules/platform/platform';
import { getNativeApplication, android as androidApp } from 'tns-core-modules/application';
import * as imageSource from 'tns-core-modules/image-source';

export class TabBarView extends View {
    createNativeView() {
        if (isIOS) {
            const homeTabItem = UITabBarItem.new();
            homeTabItem.title = 'Home';

            const directionsTabItem = UITabBarItem.new();
            directionsTabItem.title = 'Directions';

            const tabBar = UITabBar.new();
            tabBar.items = NSArray.arrayWithArray([homeTabItem, directionsTabItem] as any);
            tabBar.backgroundColor = UIColor.yellowColor;

            return tabBar;
        } else {
            const tabBar = new (android.support as any).design.widget.BottomNavigationView(
                this._context
            ) as android.view.View;
            tabBar.setBackgroundColor(android.graphics.Color.parseColor('#dedede'));
            const tabBarMenu: android.view.Menu = (tabBar as any).getMenu();
            console.log('menu-------->', tabBarMenu);
            const homitem = tabBarMenu.add('Home');
            const imagePath = imageSource.fromResource('home_icon').android;
            console.log('imagepath', imagePath);

            const did = androidApp.context
                .getResources()
                .getIdentifier('home_icon', 'drawable', getNativeApplication().getPackageName());
            console.log('did', did);
            const drawable = androidApp.context.getResources().getDrawable(did);
            console.log('drawablw', drawable);

            homitem.setIcon(drawable);

            const diritem = tabBarMenu.add('Directions');
            diritem.setIcon(drawable);

            const moreitem = tabBarMenu.add('More');
            moreitem.setIcon(drawable);

            const STATE_ENABLED: number = 0x0101009e;
            const STATE_CHEKCED: number = 0x010100a0;

            const enabledState = Array.create('int', 1);
            console.log('wthffffff');
            enabledState[0] = STATE_ENABLED;

            const checkedState = Array.create('int', 2);
            checkedState[0] = STATE_ENABLED;
            checkedState[1] = STATE_CHEKCED;
            console.log('done creating two state arrays')

            const states =  Array.create('[I', 3); //java.lang.reflect.Array.newInstance(checkedState.getClass(), 3);
            console.log('done createing statessssss')
            states[0] = checkedState;
            states[1] = enabledState;
            states[2] = Array.create('int', 0)
            console.log(states.getClass());

            // console.log('1', java.lang.Class.forName('int'));
            // console.log('2', java.lang.Class.forName('int[]'));
            // console.log('3', java.lang.Class.forName('int[][]'));


            const colors = Array.create('int', 3);
            colors[0] = android.graphics.Color.parseColor('#ffffff');
            colors[1] = android.graphics.Color.parseColor('#a6a6a6');
            colors[2] = android.graphics.Color.parseColor('#a6a6a6');
            console.log('se')
            const csl = new android.content.res.ColorStateList(states, colors);

             (tabBar as any).setItemIconTintList(csl);
             (tabBar as any).setItemTextColor(csl);

            tabBar.setBackgroundColor(android.graphics.Color.parseColor('#0c2340'));

            return tabBar;
        }
    }

    onLayout(left: number, top: number, right: number, bottom: number): void {
        console.log(`onLayout: left:${left}, top: ${top}, right: ${right}, bottom: ${bottom}`);
        if (isIOS) {
            let scale = UIScreen.mainScreen.scale;
            // (this.nativeView as UITabBar).frame = CGRectMake(left, 729 - 44, UIScreen.mainScreen.bounds.size.width, 49 + 34);
            (this.nativeView as UITabBar).frame = CGRectMake(
                left / scale,
                top / scale,
                (right - left) / scale,
                (bottom - top) / scale
            );
        }
    }

    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        console.log(
            `onMeasure: widthMeasureSpec:${widthMeasureSpec}, heightMeasureSpec: ${heightMeasureSpec}`
        );
        console.log('tabbar', JSON.stringify(this.height), JSON.stringify(this.width));

        // TODO
        // this.setMeasuredDimension(300, 100);
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }
}
