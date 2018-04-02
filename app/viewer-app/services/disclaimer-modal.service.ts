// import { Injectable } from '@angular/core';
// import { Modal, DialogFormModal } from 'ngx-modialog/plugins/vex';
// import { Store } from '@ngrx/store';
// import { tap } from 'rxjs/operators';
// import { fromPromise } from 'rxjs/observable/fromPromise';

// import * as rootReducer from '../store/reducers';
// import * as settingAction from '../store/actions/setting.action';

// export const MODAL_MESSAGE = `
// UOW makes every effort to ensure this map is free of errors
// but does not warrant the map or its features are completely accurate
// or fit for a particular use. UOW provides this map without any warranty
// of any kind whatsoever, either express or implied. This map should not be used
// for navigation or legal purposes. It is intended for general reference use only.
// `;

// export const UNDERSTAND = 'UNDERSTAND';

// @Injectable()
// export class DisclaimerModal {
//     constructor(
//         private store: Store<rootReducer.RootState>,
//         private modal: Modal
//     ) {}

//     show() {
//         this.modal
//             .alert()
//             .showCloseButton(false)
//             .keyboard(null)
//             .isBlocking(true)
//             .okBtn(null)
//             .cancelBtn(null)
//             .contentClassName('vex-content uow-disclaimer-content')
//             .addButton(
//                 'button primary',
//                 'I Understand',
//                 (cmp: DialogFormModal, $event: MouseEvent) =>
//                     cmp.dialog.close(UNDERSTAND)
//             )
//             .message(MODAL_MESSAGE)
//             .open()
//             .then(dialog => {
//                 dialog.result.then(
//                     result => {
//                         if (result === UNDERSTAND) {
//                             this.store.dispatch(
//                                 new settingAction.SetReadDisclaimer()
//                             );
//                             this.store.dispatch(
//                                 new settingAction.HideDisclaimerDialog()
//                             );
//                         }
//                     },
//                     () => {}
//                 );
//             });
//     }
// }
