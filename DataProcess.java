import java.io.*;
import java.util.*;

public class DataProcess {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("/Users/OlgaAndreeva/Emergency-Optimization/LatLongDispatch.csv");
        List<LatLongObject> lines = new ArrayList<LatLongObject>();
        Scanner input = new Scanner(file);
        Map<LatLongObject, Map<String, Integer>> dispatchTypes = new HashMap<LatLongObject, Map<String, Integer>>();

        while(input.hasNextLine()){
            String line = input.nextLine();
            String[] values = line.split(",");
            LatLongObject newEmergency = new LatLongObject(values[0], values[1].substring(0, 5), values[2].substring(0, 7));
            if (!dispatchTypes.containsKey(newEmergency)) {
                dispatchTypes.put(newEmergency, new HashMap<String, Integer>());
                dispatchTypes.get(newEmergency).put(values[0], 1);
            }
            if (dispatchTypes.get(newEmergency).get(values[0]) == null) {
                dispatchTypes.get(newEmergency).put(values[0], 1);
            } else {
                dispatchTypes.get(newEmergency).put(values[0], dispatchTypes.get(newEmergency).get(values[0]) + 1);
            }
        }

        // maps the coordinates to the most likely called dispatch type
        Map<LatLongObject, String> maxDispatch = new HashMap<LatLongObject, String>();
        for (Map.Entry<LatLongObject, Map<String, Integer>> incident : dispatchTypes.entrySet()) {
            String largestDispatch = "";
            int largestCount = 0;
            LatLongObject key = incident.getKey();
            for (Map.Entry<String, Integer> dispatch : incident.getValue().entrySet()) {
                if (dispatch.getValue() == largestCount) {
                    largestDispatch = largestDispatch + "/" + dispatch.getKey();
                }

                if (largestDispatch.equals("") || dispatch.getValue() > largestCount) {
                    largestDispatch = dispatch.getKey();
                    largestCount = dispatch.getValue();
                }
            }
            maxDispatch.put(key, largestDispatch);
        }
        PrintStream output = new PrintStream(new File("/Users/OlgaAndreeva/Emergency-Optimization/LatLongDispatchMax.txt"));
        for (Map.Entry<LatLongObject, String> location : maxDispatch.entrySet()) {
            output.println(location.getKey() + ": " + location.getValue());
        }
    }
}