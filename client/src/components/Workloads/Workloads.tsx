import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import './Workloads.css';

const Workloads = () => {

    const [sumWorkloads, setSumWorkloads] = useState(0);

    useEffect(() => {
        api.get("/subjects/workloads/sum").then(({ data }) => {
            setSumWorkloads(data.sum);
        })
    });

    return (
        <>
            <div className="totalWorkloads">
                <div className="total">Total</div>
                <div>{sumWorkloads === null ? 0 : sumWorkloads}h</div>
            </div>
        </>
    );
}

export default Workloads;