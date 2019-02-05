import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveImage } from '../actions';
import { Redirect } from 'react-router';


class ImageForm extends React.Component {
    state = {
        _id: this.props.image ? this.props.game._id : null,
        image: this.props.image ? this.props.image.image : '',
        description: this.props.image ? this.props.image.description : '',
        errors: {
            //title: 'Обовязкове поле'
        },
        loading: false,
        done: false
    }
    setStateByErrors=(name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState(
              {
                [name]: value,
                errors
              }
            )
          }
          else {
            this.setState(
              { [name]: value })
          }
    } 

    handleChange=(e) => {
        this.setStateByErrors(e.target.name, e.target.value);
    }

    uploadImageBase64 = (evt) => {
        const {name} = evt.target;
        if (evt.target.files && evt.target.files[0]) {
            if (evt.target.files[0].type.match(/^image\//)) {
                console.log("---Upload file---", evt.target);
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.setStateByErrors(name, e.target.result);
                }
                reader.readAsDataURL(evt.target.files[0]);
            }
            else {
                alert("Invalid image type");
            }
        }
        else {
            alert("Upload file please");
        }        
    }
    onSubmitForm=(e) => {
        e.preventDefault();

        //validation
        let errors = {};
        if (this.state.image === '') errors.image = "Cant't be empty!"
        if (this.state.description === '') errors.description = "Cant't be empty!"
        
        const isValid=Object.keys(errors).length===0
        if (isValid) {
            let model = {
                image: this.state.image,
                description: this.state.description
            };
            this.props.saveImage(model)
                .then(
                    () => { 
                        //console.log("----Good Respnce----"); 
                        this.setState({done: true});
                    },
                    (err) => { 
                        this.setState({ errors: err }); 
                        //console.log('--Bad REquest--', errors); 
                    }
                );
        }
        else
        {
            this.setState({ errors });
        }

    }
    

    render() { 
        console.log("this.props", this.props);
        const { errors } = this.state;
        const form = (
            <form onSubmit={this.onSubmitForm}>
                <h1>Add new Image</h1>
                
                <div className={classnames('form-group', { 'has-error': !!errors.description })} >
                    <label htmlFor="description">Опис</label>
                    <textarea type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Опис" />
                    {!!errors.description ? <span className="help-block">{errors.description}</span> : ''}
                </div>

                <div className={classnames('form-group', { 'has-error': !!errors.image })}>
                    <label htmlFor="image">Фото</label>
                    <input type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={this.uploadImageBase64}
                        placeholder="Фото" />
                    {!!errors.image ? <span className="help-block">{errors.image}</span> : ''}
                </div>

                    {
                        this.state.image !== '' &&
                        <div className="form-group">
                            <span className="thumbnail col-md-2">
                                <img src={this.state.image} alt="Image" />
                            </span>
                        </div>
                    }

                <div className="form-group">
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-warning">Додати <span className="glyphicon glyphicon-send"></span></button>
                    </div>
                </div>
            </form>
        );
        return (
            <div>
              { this.state.done ? <Redirect to="/all-images"/> : form }
            </div>
          );
    }
}
const mapStateToProps = (state, props) => {
    if(props.match.params._id) {
        //console.log(state.games);
       // console.log("dsfasdf",props.match.params._id);
        return {
            image: state.images.find(item=>item.id===props.match.params._id)
        }
    } 
    return { image: null};
} 
 
export default connect(mapStateToProps, {saveImage})(ImageForm);