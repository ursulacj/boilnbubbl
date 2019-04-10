import React from 'react';
import { Link } from 'react-router-dom';

const InstructionModal = () =>(

    <div>
        <a href="#instructionsModal" className="modal-trigger waves-effect waves-light left"><i className="material-icons gameMenuBtn"> info</i></a>
        

        <div id="instructionsModal" className="modal">
            <div className="modal-content">
                <h4 className="center">Game Instructions</h4>
                <p>Backarapper besotted brace chalcedony churl counsels daffadowndilly fane kerb penthouse puissant rope-walk twain wellnigh. Aforetime agin courtesy craven fag-end fortnight gold greened kerb lob mantle riven stead stone-cast sward thenceforward throe toothsome wester. Aforetime apace beset besought blazoned circlet co&#235;val dregs gibbet hog-back malefactor mew quaff shade sires spinney sward tarn twine upbraid vittles waylay weapontake wherefore. Bade baleful baluster coffer footpad heed keen lithe longfather outworn parley shun trove wile wreathe. Burg coffer craven dearth faggot forespeak garnet halt leave mast-lands revelry thrall toss-pot traverse wraith.</p>
            </div>
            <div className="modal-footer">
                <Link to="#" className="modal-close waves-effect btn-flat">I get it!</Link>
            </div>
        </div>


    </div>

)

export default InstructionModal;
