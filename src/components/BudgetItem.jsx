// rrd imports
import { Form, Link } from "react-router-dom";

// library
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";

// helper functions
import { calculateSpentByBudget, formatCurrency, formatPercentage } from "../helpers";

const BudgetItem = ({ budget, showDelete = false }) => {
    const { id, name, amount, color } = budget;
    const spent = calculateSpentByBudget(id);
  return (
    <div
    className="budget"
    style={{
        "--accent": color
    }}
    >
       <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
       </div>
       <progress max={amount} value={spent}>
            {formatPercentage(spent / amount)}
       </progress>
       <div className="progress-text">
        <small>{formatCurrency(spent)}</small>
        <small>{formatCurrency(amount - spent)}</small>
       </div>
       {
        showDelete ? (
          <div className="flex-sm">
            <Form
              method="post"
              action="delete"
              onSubmit={(event) => {
                if(!confirm("Are you sure you want to permanently delete this budget?"))
                {event.preventDefault();
                }
              }}
            >
                <button type="submit" className="btn">
                  <span>Delete budget</span>
                  <TrashIcon width={20} />
                </button>
            </Form>
          </div>
        ) : (
         <div className="flex-sm">
           <Link
            to={`/budget/${id}`}
            className="btn"
          >
              <span>View Details</span>
              <BanknotesIcon wigth={20} />
          </Link>
         </div>
        )
       }
    </div>
  )
}

export default BudgetItem