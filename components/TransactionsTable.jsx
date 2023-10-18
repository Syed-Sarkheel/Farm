import {
  Typography,
} from "@material-tailwind/react";


export function TransactionsTable(props) {
  return (

    <tbody>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold"
            >
              {props.orderId}
            </Typography>
          </div>
        </td>
        <td className='p-4 border-b border-blue-gray-50'>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {props.productName}
          </Typography>
        </td>
        <td className={'p-4 border-b border-blue-gray-50'}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {props.date}
          </Typography>
        </td>
        <td className={'p-4 border-b border-blue-gray-50'}>
          <div className="w-max">
            {props.quantity}
          </div>
        </td>
        <td className={'p-4 border-b border-blue-gray-50'}>
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal capitalize"
              >
                {props.amount}
              </Typography>
            </div>
          </div>
        </td>
      </tr>
    </tbody>

  );
}