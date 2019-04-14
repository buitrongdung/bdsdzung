import Model from '../../../utils/Model'

class User extends Model {
    constructor(props) {
        super(props);

        this.initialize(props)
    }

    initialize(props) {
        super.initialize(props);

        this.name = props.name || '';
        this.email = props.email || '';
        this.user_type = props.user_type || '';
        this.user_status = props.user_status || '';
    }
}

export default User
