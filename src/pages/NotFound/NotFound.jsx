import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {

const navigate = useNavigate();

  return (
    <div className="h-schreen w-full  flex flex-col justify-center items-center bg-gray-100 ">
      <Card
        className="h-full max-w-lg
        text-center"
      >
        <CardHeader>
          <CardTitle
          className='text-4xl font-bold mb-5'
          >404 Not Found</CardTitle>
          <p>The page you are looking for does not exist</p>
        </CardHeader>

        <CardContent>
          <img 
          className="w-1/2 mx-auto shadow-lg " 
          src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
          <Button
          onClick={() => navigate(-1)}
          variant = 'outline' 
          className=' mt-5 '
          >Go back</Button>
        </CardContent>
      </Card>
    </div>
  );
};
