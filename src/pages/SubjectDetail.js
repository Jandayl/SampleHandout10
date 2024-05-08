
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SubjectDetail() {
    
    const [subjectDetail, setSubjectDetail] = useState({});
    let {code} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/get-subject-by-code?code=${code}`)
            .then(response => response.json())
            .then(body => {
                setSubjectDetail(body);
            })
    }, []);

    return (
        <>
            <h1>{code}</h1>
            {/* <p>Detail page for {code}</p> */}
            <ul>
                <li>Code: {subjectDetail.code}</li>
                <li>Title: {subjectDetail.title}</li>
                <li>Description: {subjectDetail.desc}</li>
                <li>Units: {subjectDetail.units}</li>
            </ul>
        </>
    )
}