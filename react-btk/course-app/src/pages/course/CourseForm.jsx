import { Form, redirect, useActionData, useNavigation } from "react-router";
import { isRequiredCheck, isValidImage } from "../../utils/validations";

export default function CourseForm({ method, data }) {

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const result  = useActionData();

  return (
    <Form method={method}>
       {result && result.errors && (
        <ul className="errors">
          {Object.values(result.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          //required
          defaultValue={data ? data.title : ""}
        />
        {/* {errors && errors.includes("title") && (
          <p className="error">Title is required!</p>
        )} */}
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="image"
          //required
          defaultValue={data ? data.image : ""}
        />
        {/* {errors && errors.includes("image") && (
          <p className="error">Image must be a valid image URL!</p>
        )} */}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          //required
          rows={5}
          defaultValue={data ? data.description : ""}
        ></textarea>
        {/* {errors && errors.includes("description") && (
            <p className="error">Description is required!</p>
        )} */}
      </div>
      <button type="submit" disabled={isSubmitting}> {isSubmitting ? "Kayıt Ediliyor..." : "Kaydet"}</button>
    </Form>
  );
}

export async function courseAction({request, params}) {
    const formData = await request.formData();
    const method = request.method;

    let url = "http://localhost:5000/courses";

    if(method === "PUT") {
        url = `${url}/${params.courseid}`;
     }

    const newCourse = {
        title: formData.get("title"),
        image: formData.get("image"),
        description: formData.get("description"),
    };

    // const errors = [];
    // if(!isRequiredCheck(newCourse.title)) {
    //     errors.push("title");
    // }

    // if(!isRequiredCheck(newCourse.description)) {
    //     errors.push("description");
    // }

    // if(!isValidImage(newCourse.image)) {
    //     errors.push("image");
    // }

    // if(errors.length > 0) {
    //     console.log(errors);
    //     return errors;
    // }

    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
    });

    if(response.status === 403) {
        return response;
    }

    if(response.ok) {
      return redirect("/courses");
    }
}