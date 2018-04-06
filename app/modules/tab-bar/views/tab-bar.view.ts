import { View } from 'ui/core/view';
import { isIOS } from 'tns-core-modules/platform/platform';

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
            const tabBar = new (android.support as any).design.widget.BottomNavigationView(this._context) as android.view.View;
            tabBar.setBackgroundColor(android.graphics.Color.parseColor('#dedede'))
            const tabBarMenu: android.view.Menu = (tabBar as any).getMenu()
            tabBarMenu.add('Home')
            tabBarMenu.add('Directions')
            tabBarMenu.add('More')
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
