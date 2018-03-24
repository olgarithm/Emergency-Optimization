import java.io.*;
import java.util.*;

public class TimeProcess {
    public static void main(String[] args) throws FileNotFoundException {
        File file = new File("/Users/OlgaAndreeva/Emergency-Optimization/TimeDispatch.csv");
        List<TimeObject> lines = new ArrayList<TimeObject>();
        Scanner input = new Scanner(file);
        Map<TimeObject, Map<String, Integer>> dispatchTypes = new HashMap<TimeObject, Map<String, Integer>>();

        while(input.hasNextLine()){
            String line = input.nextLine();
            String[] values = line.split(",");
            TimeObject newEmergency = new TimeObject(values[0].substring(11, 16), values[1]);
            if (!dispatchTypes.containsKey(newEmergency)) {
                dispatchTypes.put(newEmergency, new HashMap<String, Integer>());
                dispatchTypes.get(newEmergency).put(values[1], 1);
            }
            if (dispatchTypes.get(newEmergency).get(values[1]) == null) {
                dispatchTypes.get(newEmergency).put(values[1], 1);
            } else {
                dispatchTypes.get(newEmergency).put(values[1], dispatchTypes.get(newEmergency).get(values[1]) + 1);
            }
        }

        // maps the time to the most likely called dispatch type
        Map<TimeObject, String> maxDispatch = new HashMap<TimeObject, String>();
        for (Map.Entry<TimeObject, Map<String, Integer>> incident : dispatchTypes.entrySet()) {
            String largestDispatch = "";
            int largestCount = 0;
            TimeObject key = incident.getKey();
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
        PrintStream output = new PrintStream(new File("/Users/OlgaAndreeva/Emergency-Optimization/TimeDispatchMax.js"));
        for (Map.Entry<TimeObject, String> location : maxDispatch.entrySet()) {
            output.println("\"" + location.getKey() + "\" : \"" + location.getValue() + "\",");
        }
    }
}